import React from 'react'
import './Dashboard.css'
import headerImg from '../../assets/images/headerImg.svg';
import one from '../../assets/images/Frame (1).svg';
import two from '../../assets/images/Frame (2).svg';
import three from '../../assets/images/Frame (3).svg';
import four from '../../assets/images/Frame (4).svg';
import five from '../../assets/images/Frame (5).svg';
import six from '../../assets/images/Frame (6).svg';
import Frame from '../../assets/images/Frame.svg';
import humble from '../../assets/images/humbleicons_dashboard.svg';


const Dashboard = () => {
  return (
    <>

{/* 
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

 */}


{/* ------------------------------------------------------ */}


<div className='row' style={{ height:98, }}>

    <div className='col-10' style={{backgroundColor:"#F8F8F8", }}></div>
    <div className='col-2  ' style={{backgroundColor:"#F8F8F8", }}>
            <div className='h-100' style={{backgroundColor:"#073e32", borderTopLeftRadius:"50%"}}>

            </div>

    </div>

</div>


<div className='row' style={{ height:926 }}>
 <div className='col-10'></div>
 <div className='col-2 text-light' style={{backgroundColor:"#073e32", }}>
    <div className='d-flex'>
        <h3>لوحة التحكم</h3>
        <img className="humbleicons" alt="Humbleicons" src={humble} />
    </div>
    <div className='d-flex'>
        <h3>تقارير</h3>
        <img className="frame-2" alt="Frame" src={Frame} />
    </div>
    <div className='d-flex'>
        <h3>المعلمون</h3>
        <img className="frame-4" alt="Frame" src={two} />
    </div>
    <div className='d-flex'>
        <h3>الطلاب</h3>
        <img/>
    </div>
    <div className='d-flex'>
        <h3>الجلسات</h3>
        <img className="frame-4" alt="Frame" src={three} />
    </div>
    <div className='d-flex'>
        <h3>الاشتراكات</h3>
        <img className="frame-4" alt="Frame" src={four} />
    </div>
    <div className='d-flex'>
        <h3>الباقات</h3>
        <img className="frame-4" alt="Frame" src={five} />
    </div>
    <div className='d-flex'>
        <h3>الاشعارات</h3>
        <img className="frame-4" alt="Frame" src={six} />
    </div>
    <div className='d-flex'>
        <h3>ادمن</h3>
        <img className="frame-4" alt="Frame" src={two} />
    </div>
 </div>

</div>







    

    </>
  )
}

export default Dashboard
