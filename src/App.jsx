import React from 'react'
import formation from './assets/img/formation.svg'
import head from './assets/img/head.svg'
import italy from './assets/img/italy.svg'
import leaf1 from './assets/img/leaf 1.svg'
import leaf2 from './assets/img/leaf 2.svg'
import leaf3 from './assets/img/leaf 3.svg'
import leaf4 from './assets/img/leaf 4.svg'
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import "./App.css"

const locales = {
  en: { title: 'English' },
  it: { title: 'Italian' },
};

function App() {
  const { t, i18n } = useTranslation();



  return (
    <div>
 <div className="english">
    <div>
    {Object.keys(locales).map((locale) => (
          <li className="language" key={locale}><div type="submit" onClick={() => i18n.changeLanguage(locale)}>
            {locales[locale].title}
          </div></li>
        ))}
    </div>
</div>


<div className="head_cover">

    <div className="container">
        <div className="row">
            <div className="col-sm head_col">
                <img className="head_photo" src={head} alt=""/>
            </div>
            <div className="col-sm d-flex align-items-center">
                <span className="head_title">{t('main.header')}</span>
            </div>
        </div>
    </div>
</div>

<div className="line_one"></div>
<div className="line_two"></div>
<div className="line_three"></div>
<div className="line_four"></div>
<div className="line_five"></div>
<div className="line_six"></div>
<div className="line_seven"></div>

<div className="container presentation">
    <div className="row">
        <div className="col-sm">
            <img className="leaf_photo_one" src={leaf1} alt=""/>
        </div>
        <div className="col-sm short_colum ">
                <h3 className="me" dangerouslySetInnerHTML={{ __html:t('main.me')}}></h3>
                <p className="text_me" dangerouslySetInnerHTML={{ __html:t('main.text_me')}}>
                </p>
        </div>
    </div>
</div>



<div className="hobbies_section">
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <h3 className="hobbies"dangerouslySetInnerHTML={{ __html:t('main.hobbies')}}></h3>
                <p className="hobbies_text_one" dangerouslySetInnerHTML={{ __html:t('main.hobbies_text_one')}}>
                </p>
            </div>
            <div className="col-sm head_col">
                <img className="leaf_photo_two" src={leaf2} alt=""/>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-sm mt-5">
                <p className="hobbies_text_two" dangerouslySetInnerHTML={{ __html:t('main.hobbies_text_two')}}>
                </p>
            </div>
            <div className="col-sm head_col ">
                <img className="leaf_photo_four" src={leaf4} alt=""/>
            </div>
        </div>
    </div>
</div>


<div className="training_section">
    <div className="container training ">
        <div className="row">
            <div className="col-sm head_col">
                <img className="hobbies_photo_two" src={italy} alt=""/>
            </div>
            <div className="col-sm">
                <span className="training_title" dangerouslySetInnerHTML={{ __html:t('main.training_title')}}></span>
                <p className="training_text" dangerouslySetInnerHTML={{ __html:t('main.training_text')}}>
                </p>
            </div>
        </div>
    </div>
</div>


<div className="training_section_two">
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <img className="leaf_photo_three" src={formation} alt=""/>
            </div>
            <div className="col-sm">
                <p className="training_text_two" dangerouslySetInnerHTML={{ __html:t('main.training_text_two')}}>
                </p>
            </div>
        </div>
    </div>

<div className="container">
    <div className="row">
        <div className="col-sm space  ">
            <img className="leaf_photo_three" src={leaf3} alt=""/>
        </div>
        <div className="col-sm space">
            <p className="training_text_three" dangerouslySetInnerHTML={{ __html:t('main.training_text_three')}}>
            </p>
        </div>
    </div>
</div>
</div>

<div className="container my-5">
    <h3 className="title_progress">... work in progress</h3>
</div>

<div className="footer_cover">
    <div className=" container footer_box">
        <div className="row">
            <div className="col-sm p-5">
                <h3 className="contact_title" dangerouslySetInnerHTML={{ __html:t('main.contact_title')}}></h3>
                <p className="footer_contact" dangerouslySetInnerHTML={{ __html:t('main.footer_contact')}}>
                </p>
            </div>
            <div className="col-sm p-5">
                <br/><br/>
                <div className="footer_dot"></div>

                    <p className="footer_text">e-mail: <a href="mailto:ilalombi@gmail.com">ilalombi@gmail.com</a></p>
                <div className="footer_dot"></div>
                <p className="footer_text">mobile: <a href="tel:+393347719861">+39 3347719861</a> </p>
            </div>
        </div>
    </div>
</div>

    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}