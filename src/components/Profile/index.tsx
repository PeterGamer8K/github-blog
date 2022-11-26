import {
  faBuilding,
  faCircleUser,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { GithubButton } from '../GithubButton'
import {
  MainContent,
  PrimitiveBuildingIcon,
  PrimitiveGithubIcon,
  PrimitiveUserGroupIcon,
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileFooter,
  ProfileHeader,
  ProfileMain,
} from './style'

export const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileAvatar src="https://github.com/PeterGamer8K.png" />

        <MainContent>
          <ProfileHeader>
            <h2>Pedro Meira</h2>
            <GithubButton href="https://github.com/PeterGamer8K">
              GITHUB
            </GithubButton>
          </ProfileHeader>
          <ProfileMain>
            <ProfileDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              sint ullam soluta esse sapiente animi mollitia vitae alias? Natus
              inventore iure cumque voluptatum? Fugiat, quaerat sunt eaque
              commodi quisquam pariatur?
            </ProfileDescription>
          </ProfileMain>

          <ProfileFooter>
            <div>
              <PrimitiveGithubIcon icon={faCircleUser} />
              <span style={{ fontWeight: 400 }}>pedromeira220</span>
            </div>
            <div>
              <PrimitiveBuildingIcon icon={faBuilding} />
              <span style={{ fontWeight: 400 }}>allburn</span>
            </div>
            <div>
              <PrimitiveUserGroupIcon icon={faUserGroup} />
              <span style={{ fontWeight: 400 }}>32 seguidores</span>
            </div>
          </ProfileFooter>
        </MainContent>
      </ProfileContent>
    </ProfileContainer>
  )
}
