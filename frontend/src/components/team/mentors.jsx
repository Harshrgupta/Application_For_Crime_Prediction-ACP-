import React from "react";
import './mentors.css';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

const MentorTeamPage = () => {
    return (
        <MDBCard className="my-5 px-1 pb-5 text-center">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                    Mentors
                </h2>

                <MDBRow>
                    <MDBCol md="6" className="mb-md-0 mb-5">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="rounded-circle z-depth-1 img-fluidi"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Mr. Mukesh Sakle
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Assistant Professor</h6>

                    </MDBCol>

                    <MDBCol md="6" className="mb-md-0 mb-5">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="rounded-circle z-depth-1 img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Dr. Lalit Purohit
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Assistant Professor</h6>

                    </MDBCol>
                    {/* <MDBCol md="4" className="mb-md-0 mb-5">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="rounded-circle z-depth-1 img-fluid"
                            alt="Sample avatar"
                        />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Ms. Jasmeet Kaur
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Assistant Professor</h6>

                    </MDBCol> */}
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default MentorTeamPage;