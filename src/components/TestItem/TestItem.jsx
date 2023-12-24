import React from "react";
import "./TestItem.css";
import headerImg from '../../assets/images/headerImg.svg';
import one from '../../assets/images/Frame (1).svg';
import two from '../../assets/images/Frame (2).svg';
import three from '../../assets/images/Frame (3).svg';
import four from '../../assets/images/Frame (4).svg';
import five from '../../assets/images/Frame (5).svg';
import six from '../../assets/images/Frame (6).svg';
import Frame from '../../assets/images/Frame.svg';
import humble from '../../assets/images/humbleicons_dashboard.svg';



const TestItem = () => {
    return (
        <div className="notification">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <img className="img" alt="Img" src="0442059a5c40e9304d21e77a18928d02ac15d79c-539x326-1.png" />
                        <div className="rectangle" />
                        <div className="group">
                            <img className="ellipse" alt="Ellipse" src={headerImg} />
                            <div className="frame">
                                <div className="text-wrapper">مي صالح</div>
                                <div className="maii-saleh-gmail-com">Maii Saleh@gmail.com</div>
                            </div>
                        </div>
                        <div className="div">
                            <div className="text-wrapper-2">العام:</div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-3">2022</div>
                                    <div className="rectangle-2" />
                                    {/* <img className="arrow-drop-down" alt="Arrow drop down" src="arrow-drop-down-1.svg" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="overlap-2">
                                <div className="group-2">
                                    <div className="text-wrapper-4">تقارير</div>
                                </div>
                                <img className="group-3" alt="Group" src="group-11.png" />
                                <div className="group-4">
                                    <div className="text-wrapper-4">تسجيل خروج</div>
                                </div>
                                <div className="rectangle-3" />
                                <div className="component">
                                    <img className="humbleicons" alt="Humbleicons" src={humble} />
                                    <div className="text-wrapper-5">لوحة التحكم</div>
                                </div>
                                <div className="group-5">
                                    <div className="text-wrapper-4">المعلمون</div>
                                </div>
                                <div className="group-wrapper">
                                    <div className="group-6">
                                        <div className="group-7">
                                            <div className="text-wrapper-4">الطلاب</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="group-9">
                                        <div className="group-10">
                                            <div className="text-wrapper-4">الجلسات</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-wrapper-6">الاشتراكات</div>
                                <div className="text-wrapper-7">الباقات</div>
                            </div>
                        </div>
                        <img className="group-11" alt="Group" src="group-1000005137.png" />
                        <img className="group-12" alt="Group" src="group.png" />
                        <img className="frame-2" alt="Frame" src={Frame} />
                        <img className="frame-3" alt="Frame" src="image.svg" />
                        <img className="frame-4" alt="Frame" src={two} />
                        <img className="frame-5" alt="Frame" src={three} />
                        <img className="frame-6" alt="Frame" src={four} />
                        <img className="frame-7" alt="Frame" src={five} />
                        <div className="text-wrapper-8">الاشعارات</div>
                        <img className="frame-8" alt="Frame" src={six} />
                        <div className="group-13">
                            <div className="text-wrapper-4">ادمن</div>
                        </div>
                        <img className="ri-admin-fill" alt="Ri admin fill" src="ri-admin-fill.svg" />
                    </div>
                    {/* <div className="group-14">
                        <div className="overlap-3">
                            <div className="text-wrapper-9">ارسال للجميع</div>
                            <img className="arrow-drop-down-2" alt="Arrow drop down" src="arrow-drop-down-2.svg" />
                        </div>
                    </div> */}
                    <div className="overlap-4">
                        <div className="text-wrapper-10">
                        {/* <input type="text" /> */}
                        العنوان</div>
                    </div>
                    <div className="overlap-5">
                        <div className="text-wrapper-11">محتوي الرسالة</div>
                    </div>
                    <div className="group-15">
                        <div className="overlap-6">
                            <div className="text-wrapper-12">ارسال</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TestItem