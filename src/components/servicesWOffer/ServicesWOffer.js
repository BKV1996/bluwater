import React from 'react'
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Headers from '../headers/Headers';
import './ServicesWOffer.css'

const ServicesWOffer = () => {
    const navigate = useNavigate();
    return (
        <>
        <Headers/>
            <div className='services1'>
                <Nav className='services2'>
                    <Nav.Link onClick={() => navigate("/pmc")}>Project Management Consultant</Nav.Link>
                    <Nav.Link onClick={() => navigate("/TPoolConst")}>Turnkey Swimming Poolconstruction</Nav.Link>
                    <Nav.Link onClick={() => navigate("/WaterTMng")}>Water Treatment Management</Nav.Link>
                    <Nav.Link onClick={() => navigate("/WaterProofing")}>Water Proofing</Nav.Link>
                    <Nav.Link onClick={() => navigate("/GlassMTiles")}>Glass Mosaic Tiles</Nav.Link>
                    <Nav.Link onClick={() => navigate("/WaterFeatureSpa")}>Water Features & Spa</Nav.Link>
                </Nav>
            </div>
            
        </>
    )
}

export default ServicesWOffer
