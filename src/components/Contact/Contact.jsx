import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Contact() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', background: 'black', color: 'white', padding: '20px 40px 70px 40px' }}>
                <Row style={{ justifyContent: 'space-around', textAlign: 'justify'}}>
                    <Col lg="3">
                        <h4 style={{ textAlign: 'center', paddingBottom: '20px' }}>Recent Blog Titles</h4>
                        <h6>🚀 Exploring Hidden Gems in Asia</h6>
                        <h6>🚀 A Journey Through South America</h6>
                        <h6>🚀 Adventures in the Heart of Europe</h6>
                        <h6>🚀A Guide to the Most Picturesque Spots</h6>
                    </Col>
                    <Col lg="3">
                        <h4 style={{ textAlign: 'center', paddingBottom: '20px' }}>Contact Information</h4>
                        <h6><strong>Email:</strong> info@example.com</h6>
                        <h6><strong>Phone:</strong> (123) 456-7890</h6>
                    </Col>
                    <Col lg="3">
                        <h4 style={{ textAlign: 'center', paddingBottom: '20px' }}>Follow Us On</h4>
                        <h6>✧ Facebook</h6>
                        <h6>✧ Instagram</h6>
                        <h6>✧ Youtube</h6>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
