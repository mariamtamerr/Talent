import React from 'react'
import './Dashboard.css'
import headerImg from '../../assets/images/headerImg.svg'

const Dashboard = () => {
  return (
    <>
      
     {/* <div className='row row-cols-2  '>
        <div className='bg-light header d-flex justify-content-around col-8' style={{width:"1440px", height:"98px"}}>
            
            
            
            <div className='boxImg bg- d-flex'>
                <div className='content'>
                    <h4>مي صالح</h4>
                    <h5 className='text-muted'>maii saleh@gmail.com</h5>
                </div>
                <img src={headerImg} alt='header Img'/>
            </div>


            <div className='year'>
            <h5>العام:</h5>

            </div>
        
        
        
        </div>


        <div className=' greenBox rounded-start-5 col-4' style={{height:"1024px", width:"280px"}}>
            


        </div>

     </div>  */}

{/* ------------------------------------------ */}



    <div className="headerBox">
        <div className="headerRectangle" />
            <div className="box">
                <div className="group">
                    <img className="ellipse" alt="Ellipse" src={headerImg} />
                    <div className="frame">
                        <div className="text-wrapper">مي صالح</div>
                        <div className="maii-saleh-gmail-com">Maii Saleh@gmail.com</div>
                    </div>
                </div>
            </div>


{/* <div className="box">
    <div className="group">
        <div className="text-wrapper">العام:</div>
        <div className="overlap-group-wrapper">
            <div className="overlap-group">
                <div className="div">2022</div>
                <div className="rectangle" />
                <img className="arrow-drop-down" alt="Arrow drop down" src="" />
            </div>
        </div>
    </div>
</div> */}


<div className="yearBox">
    <div className="yearGroup">
        <div className="year text-wrapper">العام:</div>
        <div className="year overlap-group-wrapper">
            <div className="year overlap-group">
                <div className="year div">2022</div>
                <div className="year rectangle" />
                <img className="year arrow-drop-down" alt="Arrow drop down" src="" />
            </div>
        </div>
    </div>
</div>

        
    </div>


    <div className="sideBox">
        <div className="sideRectangle" />
    </div>





    

    </>
  )
}

export default Dashboard
