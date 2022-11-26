import { GithubButtonContainer } from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface GithubButtonProps {
  children: React.ReactNode
  href: string
}

export const GithubButton: React.FC<GithubButtonProps> = ({
  children,
  href,
}) => {
  return (
    <GithubButtonContainer href={href}>
      <span>{children}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
    </GithubButtonContainer>
  )
}
