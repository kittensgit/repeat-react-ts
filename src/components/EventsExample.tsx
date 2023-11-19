import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false); // элеминт в поле квадарата или нет

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');
    };
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrag(false);
        console.log('drop');
    };
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrag(false);
    };
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler}>click</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{ width: '200px', height: '200px', background: 'blue' }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{
                    width: '200px',
                    height: '200px',
                    background: isDrag ? 'green' : 'blue',
                    marginTop: 10,
                }}
            ></div>
        </div>
    );
};

export default EventsExample;
