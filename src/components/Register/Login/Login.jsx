import React from 'react';
import Styles from './login.module.css';
import Fotter from '../../Global/Fotter';

const Login = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logoo}>
        <img
          src='https://s3-alpha-sig.figma.com/img/a010/4578/5698b27c7d3551093a32df774db0abde?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQpWcogb36VtCSYO~PqsBrgmLIomYjABILIA-XPOzRNxmrLYJM5fkK9ks23MSW9ropdbyorawKIfdCZZtKjH~7qYvvzyUZsIpHlPA8fjiTbWnwZ8NBhOMew0~P36AhemCtt~O2pSateJIvHz1ATFgMvR1MoAujlMTGZZZ7vSfY~HlK6ABsoPfgzsAoXzJqYdtovU7h9Gabh8rWzJeh9LGN5YnTY7ua4c0KasvTszYufewJxbRR~PZQN23E69MRbAMt8ekrvIM1o10TaRsF-IxUKBnN7HLs5xLnbjD2wePXXvl1R~7gcxCoNH43Zno2YVmUkwRnm~Xqex8S8cMLsS1Q__'
          alt='logo'
          className={Styles.logo_img}
        />
        <p className={Styles.logo_text}>Musicart</p>
      </div>
      <div className={Styles.form}>
        <h2 className={Styles.heading}>Sign in</h2>
        <form>
          <div className={Styles.login}>
            <label htmlFor='Enter your email or mobile number'>
              Enter your email or mobile number
            </label>
            <input type='text' required name='email' id='email' />
            <label htmlFor='Password'>Password</label>
            <input type='password' id='password' name='password' />
            <button className={Styles.continue_btn}>Continue</button>
            <p>
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </p>
          </div>
        </form>
      </div>
      <div className={Styles.centered_text}>
        <div className={Styles.line}></div>
        <div className={Styles.text}>New to Musicart ?</div>
        <div className={Styles.line}></div>
      </div>
      <button className={Styles.btn}>Create your Musicart account</button>
      <Fotter />
    </div>
  );
};

export default Login;
