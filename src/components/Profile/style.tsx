import styled, { css } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfileContainer = styled.div`
  margin-top: -5.5rem;
  width: 100%;
  padding: 0 1rem;
`
export const ProfileContent = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  background-color: ${props => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const MainContent = styled.div`
  width: 100%;
  margin-left: 2rem;
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    font-weight: 700;
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
  }
`

export const ProfileMain = styled.div`
  margin-top: 0.5rem;
  > span {
    font-weight: 400;
  }
`

export const ProfileDescription = styled.span`
  font-weight: 400;
`

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    span {
      font-weight: 400;
      font-size: 1rem;
      color: ${props => props.theme['base-title']};
    }
  }
`

const iconPrimitiveStyle = css`
  height: 1.125rem;
  width: 1.125rem;
  color: ${props => props.theme['base-label']};
`

export const PrimitiveGithubIcon = styled(FontAwesomeIcon)`
  ${iconPrimitiveStyle}
`

export const PrimitiveBuildingIcon = styled(FontAwesomeIcon)`
  ${iconPrimitiveStyle}
`

export const PrimitiveUserGroupIcon = styled(FontAwesomeIcon)`
  ${iconPrimitiveStyle}
`
