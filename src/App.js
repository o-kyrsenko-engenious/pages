import {useEffect} from "react"
import classes from "./App.module.scss";
import { data } from "./data/data";
import bgr from "./images/bgr.png"

function App() {
  const { title, text, copyright, images, logo } = data;
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}


useEffect(() => {
  window.addEventListener('resize', appHeight)
appHeight()

  return () => {
    window.removeEventListener('resize', appHeight)
appHeight()
  }
}, [])


  return (
    <div className={classes.app}>
      <div className={classes.bgr}>
        <img
          src={bgr}
          alt="anywaypay"
          width={images.w}
          height={images.h}
        />
      </div>
      <section className={classes.left}>
        <header className={classes.header}>{logo}</header>
        <main className={classes.main}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.text}>{text}</p>
            {Image(images, classes.image__portrait)}
            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
              <input
                className={classes.form__input}
                type="email"
                name="text"
                id="text"
                placeholder="Email"
              />
              <input
                className={classes.form__button}
                type="submit"
                value="Send"
              />
            </form>
        </main>
        <footer className={classes.footer}>{copyright}</footer>
      </section>
      {Image(images, classes.image__landscape)}
    </div>
  );
}

export default App;

function Image(images, className="") {
  return (
    <div className={`${classes.image} ${className}`}>
      <img
        src={images.png}
        alt={images.alt}
        width={images.w}
        height={images.h}
      />
    </div>
  );
}
