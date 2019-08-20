import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CourseList() {

    let howMany = 3;

    const courses = useSelector(
        state => state.data.slice(0, howMany),
        [howMany]
        );

    const dispatch = useDispatch();

    function addCourse() {
        dispatch({ type: 'ADD_COURSE', title: 'graphQL' })
    }

    return (
        <>
        <ul>
            {courses.map(course => <li key={course}>{course}</li>)}
        </ul>
            <button type="button" onClick={addCourse}>
                    ADICIONAR CURSO
            </button>
        </>
    )
}