import React from "react";
import { Container } from "react-bootstrap";
import TabsProfile from "../components/profile/tabs-profile";
import MainLayout from "../components/layouts/main-layout";
import "../styles/profile-page.scss";

const ProfilePage = () => {

    return (
        <MainLayout>
            <Container className="py-5 h-100">
                <TabsProfile />
            </Container>
        </MainLayout>
    )
}

export default ProfilePage;