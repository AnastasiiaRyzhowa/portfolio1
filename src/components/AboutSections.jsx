import React from 'react';
import AboutImg from '../assets/images/about2-img.jpg';
import ViewMyWorkBtn from './ViewMyWorkBtn';

function AboutSection(){
  return(
    <div className='bg-dark text-light py-5' id='about'>
      <div className='container'>
        <div className='flex-column-reverse flex-md-row row'>
          <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
            <img className='img-fluid w-75 shadow' src={AboutImg} alt="about img" />

          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center'>
            <h2 className='mb-5'>Обо мне</h2>
            <p className='text-start'> Я - стажер-аналитик, также учусь на 3 курсе Финансового Университета при Правительстве РФ.</p>
            <p className='text-start mb-5'>Как начинающий аналитик, я могу проводить анализ данных, 
              создавать отчеты и дашборды, разрабатывать презентации с результатами анализа, строить 
              прогностические модели и определять ключевые метрики для бизнеса.</p>
            <ViewMyWorkBtn/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;