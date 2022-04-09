import React from "react";
import { Container } from "react-bootstrap";
import TabProfile from "../components/profile/TabProfile";
import BaseLayout from "../components/layouts/BaseLayout";
import "../styles/profile-page.scss";

const Profile = () => {

    return (
        <BaseLayout>
            <Container className="py-5 h-100">
                <TabProfile />
            </Container>
        </BaseLayout>
    )
}

export default Profile;