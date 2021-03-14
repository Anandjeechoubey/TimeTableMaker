import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>

        <table>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
          <tr>
            <th> 9am - 10am</th>
            <td>{props.mon1}</td>
            <td>{props.tue1}</td>
            <td>{props.wed1}</td>
            <td>{props.thu1}</td>
            <td>{props.fri1}</td>
          </tr>
          <tr>
            <th> 10am - 11am</th>
            <td>{props.mon2}</td>
            <td>{props.tue2}</td>
            <td>{props.wed2}</td>
            <td>{props.thu2}</td>
            <td>{props.fri2}</td>
          </tr>
          <tr>
            <th> 11am - 12pm</th>
            <td>{props.mon3}</td>
            <td>{props.tue3}</td>
            <td>{props.wed3}</td>
            <td>{props.thu3}</td>
            <td>{props.fri3}</td>
          </tr>
          <tr>
            <th> 12pm - 1pm</th>
            <td>{props.mon4}</td>
            <td>{props.tue4}</td>
            <td>{props.wed4}</td>
            <td>{props.thu4}</td>
            <td>{props.fri4}</td>
          </tr>
          <tr>
            <th> 2pm - 3pm</th>
            <td>{props.mon5}</td>
            <td>{props.tue5}</td>
            <td>{props.wed5}</td>
            <td>{props.thu5}</td>
            <td>{props.fri5}</td>
          </tr>
          <tr>
            <th> 3pm - 4pm</th>
            <td>{props.mon6}</td>
            <td>{props.tue6}</td>
            <td>{props.wed6}</td>
            <td>{props.thu6}</td>
            <td>{props.fri6}</td>
          </tr>
          <tr>
            <th> 4pm - 5pm</th>
            <td>{props.mon7}</td>
            <td>{props.tue7}</td>
            <td>{props.wed7}</td>
            <td>{props.thu7}</td>
            <td>{props.fri7}</td>
          </tr>
          <tr>
            <th> 5pm - 6pm</th>
            <td>{props.mon8}</td>
            <td>{props.tue8}</td>
            <td>{props.wed8}</td>
            <td>{props.thu8}</td>
            <td>{props.fri8}</td>
          </tr>
        </table>
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} x={.5} y={.5} scale={.9} options={{orientation: 'landscape'}} filename="timetable.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="button">Save as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;