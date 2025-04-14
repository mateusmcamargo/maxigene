import { useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { div } from 'motion/react-client';

function Reveal({children}) {

    const ref = useRef(null);

    return (
        <div ref={ref} style={{position: 'relative', overflow: 'hidden'}}>
            <motion.div
                variants={{
                    hidden:  {y: -40},
                    visible: {y:  0},
                }}
                transition={{
                    duration: .5,
                    delay:    .25,
                }}
                initial='hidden'
                animate='visible'
            >
                {children}
            </motion.div>
        </div>
    );
}

export {Reveal};