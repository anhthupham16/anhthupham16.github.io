import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import profileImg from "../assets/img/profile-img.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  useEffect(() => {
    const toRotate = [ "Software Developer", "Web Developer", "Web Designer"];
    const period = 2000;

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, loopNum])

  // Hàm xử lý khi bấm nút Let's Connect
  const handleConnect = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* Cột trái: text */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hello World! I'm Thu`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Web Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Xin Chào! I am Thu, an enthusiastic Software Developer with a passion for turning ideas into digital reality. I am currently studying at TH Aschaffenburg - Technical University of Applied Sciences, where I am learning how to become a Software Engineer. I am always looking for opportunities to apply technology, create intuitive user interfaces and smooth experiences. I look forward to connecting with you and exploring exciting projects together!</p>
                  <button onClick={handleConnect}>Let's Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          {/* Cột phải: Hình ảnh */}
          <Col xs={12} md={6} xl={5} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="profile-img-wrapper">
                  <img src={profileImg} alt="Thu Profile" className="profile-img" />
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}