import '../index.css'; // Make sure to import the CSS file
import ImageEntry8 from '../assets/vecteezy_get-it-on-play-store-button-and-apple-app-store-icon_-removebg-preview 1.png'; // Adjust the path as per your actual file structure

import React from 'react';
function Page4() {
    
    const tableData = [
        ['Company', 'Help', 'Resources',],
        ['About ', 'Customer Support', 'Free E books',],
        ['Features', 'Delivery details', 'Development Tutorial', ],
        ['Works', 'Terms and conditions ', 'How to blog', ],
        ['Carrer ', 'Privacy policy ', 'Youtube playlist', ]
    ];

    return (
        <div className="Resources">
            <div className="page3imageandtext">
                <div className="text5">
                    Navigate Borrowing with <br /> Confidence
                    <br />
                    <button className="getstarted">Get Started</button>
                    <div className="text6">Built in Analytics to Track your Finance.</div>
                </div>
                <img
                    className="image5"
                    src="src/assets/Other 17.png"
                    height={400}
                    width={400}
                    alt="Description of image"
                />
            </div>
            <div className='info' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
                <table style={{ border: 'none', width: '100%', tableLayout: 'fixed' }}>
                    <tbody>
                        {/* Mapping through tableData to generate rows */}
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* Mapping through each row to generate cells */}
                                {row.map((cellData, colIndex) => (
                                    <td key={colIndex} style={{ padding: '10px', textAlign: 'center', color: 'white', fontSize: '20px' }}>
                                        {/* Render images if cellData is an img element */}
                                        {React.isValidElement(cellData) ? cellData : cellData}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><div className='Install'>Install App</div> <br/><img key="image-entry-8" src={ImageEntry8} alt="Entry 8" className='imagelast' /></div>
            </div>
        </div>
    );
}

export default Page4;
