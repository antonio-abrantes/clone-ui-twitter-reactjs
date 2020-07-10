import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Antônio Abrantes</h1>
        <h2>@Toin_Abrantes</h2>

        <p>
          Developer at <a href="https://antonio-abrantes.github.io/">@AntonioAbrantes</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Paraíba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de Julho
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
