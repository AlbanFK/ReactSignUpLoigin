import React from 'react'
import ContentLoader from "react-content-loader"


function SearchSpinner() {
  return (
    <div className='row d-flex justify-content-around align-content-center view' >
        <div className='col-12 col-md-3'>
            <div className='card mh-auto' id='cocktailCard'>
            <ContentLoader 
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 400 460"
                style={{ width: '100%' }}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
               
            >
                <rect x="0" y="0" rx="0" ry="0" width="NaN" height="NaN" /> 
                <rect x="-16" y="393" rx="0" ry="0" width="443" height="92" /> 
                <rect x="-11" y="-2" rx="0" ry="0" width="414" height="382" />
            </ContentLoader>
            </div>
        </div>
        <div className='col-12 col-md-3'>
            <div className='card mh-auto' id='cocktailCard'>
            <ContentLoader 
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 400 460"
                style={{ width: '100%' }}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
               
            >
                <rect x="0" y="0" rx="0" ry="0" width="NaN" height="NaN" /> 
                <rect x="-16" y="393" rx="0" ry="0" width="443" height="92" /> 
                <rect x="-11" y="-2" rx="0" ry="0" width="414" height="382" />
            </ContentLoader>
            </div>
        </div>
        <div className='col-12 col-md-3'>
            <div className='card mh-auto' id='cocktailCard'>
            <ContentLoader 
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 400 460"
                style={{ width: '100%' }}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
               
            >
                <rect x="0" y="0" rx="0" ry="0" width="NaN" height="NaN" /> 
                <rect x="-16" y="393" rx="0" ry="0" width="443" height="92" /> 
                <rect x="-11" y="-2" rx="0" ry="0" width="414" height="382" />
            </ContentLoader>
            </div>
        </div>
        <div className='col-12 col-md-3'>
            <div className='card mh-auto placeholder-glow' id='cocktailCard'>
            <ContentLoader 
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 400 460"
                style={{ width: '100%' }}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
               
            >
                <rect x="0" y="0" rx="0" ry="0" width="NaN" height="NaN" /> 
                <rect x="-16" y="393" rx="0" ry="0" width="443" height="92" /> 
                <rect x="-11" y="-2" rx="0" ry="0" width="414" height="382" />
            </ContentLoader>
            </div>
        </div>
        
    </div>
  )
}

export default SearchSpinner
