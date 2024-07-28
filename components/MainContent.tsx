import React from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'
import CarCard from './CarCard'
import ShowMore from './ShowMore'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants'



 async function MainContent({searchParams}:any) {

    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2024,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 10,
        model: searchParams.model || '',
      });
    
      const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    
  
      
  return (
    <div id="discover" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you migh like</p>
        </div>

        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold mt-10 mb-14">
            There's no any result.
          </h2>
          <p>{allCars?.message}</p>
        </div>
      )}

      </div>

  )
}

export default MainContent