import React, { FC } from 'react';
import { Cookies, setCookie } from '../../utils';

import { Root, StyledButton, Iframe, Link } from './style';

interface AnnouncementProps {
  setIsAnnouncementOpen: (isOpen: boolean) => void;
}

const Announcement: FC<AnnouncementProps> = ({ setIsAnnouncementOpen }) => {
  const onCloseClick = () => {
    setCookie(Cookies.Announcement_Disabled, 'true');
    setIsAnnouncementOpen(false);
  };

  return (
    <Root>
      <div>
        ☆ Give it a star and contribute your ideal on{' '}
        <Link href="https://github.com/bienwithcode/social-network_FE" target="__blank" rel="noreferrer noopener">
          GitHub
        </Link>{' '}
        ☆
      </div>

      <div>
        <Iframe
          src="https://ghbtns.com/github-btn.html?user=bienwithcode&repo=social-network_FE&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="104"
          height="20"
          title="GitHub"
        ></Iframe>
      </div>

      <StyledButton ghost color="white" onClick={onCloseClick}>
        ✕
      </StyledButton>
    </Root>
  );
};

export default Announcement;
