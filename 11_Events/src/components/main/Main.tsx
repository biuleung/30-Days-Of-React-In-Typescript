import { useState } from 'react';

function Main() {
    let w: number = 1;
    let h: number = 1;

    const [newX, setNewX] = useState(1);
    const [newY, setNewY] = useState(1);

    const handleMouseEnter = (e: React.MouseEvent) => {
        w = window.innerWidth;
        h = window.innerHeight;

        setNewX(() => Math.floor(Math.random() * w));
        setNewY(() => Math.floor(Math.random() * h));
    };

    return (
        <div className="d-flex">
            <div
                onMouseEnter={handleMouseEnter}
                style={{
                    top: newX,
                    right: newY,
                }}
                className="px-4 py-2 bg-info text-white display-6 mw-20 box">
                30 days: Events
            </div>
        </div>
    );
}

export default Main;
