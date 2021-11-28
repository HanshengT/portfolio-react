import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import './home.css'

const Home = () => {
    const geInterval = (e: { index: number; }) => {
        switch (e.index) {
            case 0:
                return 0;
            case 1:
                return 150;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 150 + 450 + (e.index - 2) * 10;
            default:
                return 150 + 450 + (e.index - 6) * 150;
        }
    }
    const getEnter = (e: { index: number; }) => {
        const t = {
            opacity: 0,
            scale: 0.8,
            y: '-100%',
        };
        if (e.index >= 2 && e.index <= 6) {
            return { ...t, y: '-30%', duration: 150 };
        }
        return t;
    }

    const getSplit = (e: string) => {
        const t = e.split(' ');
        const c: JSX.Element[] = [];
        t.forEach((str: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined, i: number) => {
            c.push((
                <span key={`${str}-${i}`}>
                    {str}
                </span>
            ));
            if (i < t.length - 1) {
                c.push(<span key={` -${i}`}> </span>);
            }
        });
        return c;
    }
    return (

        <div className="combined">
            <div className="combined-shape">
                <div className="shape-left">
                    <TweenOne
                        animation={[
                            { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                            { x: -240, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                        ]}
                    />
                </div>
                <div className="shape-right">
                    <TweenOne
                        animation={[
                            { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                            { x: 240, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                        ]}
                    />
                </div>
            </div>
            <Texty
                className="title"
                type="mask-top"
                delay={400}
                enter={getEnter}
                interval={geInterval}
                component={TweenOne}
                componentProps={{
                    animation: [
                        { x: 130, type: 'set' },
                        { x: 100, delay: 500, duration: 450 },
                        {
                            ease: 'easeOutQuart',
                            duration: 300,
                            x: 0,
                        },
                        {
                            letterSpacing: 0,
                            delay: -300,
                            scale: 0.9,
                            ease: 'easeInOutQuint',
                            duration: 1000,
                        },
                        { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                    ],
                }}
            >
                Hi, I am Hansheng
            </Texty>
            <TweenOne
                className="combined-bar"
                animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
            />
            <Texty
                className="content"
                type="bottom"
                //split={getSplit}
                delay={2200}
                interval={30}
            >
                A Full-Stack Developer who love what I am doing.
            </Texty>
        </div>
    )
}

export default Home;