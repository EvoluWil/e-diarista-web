import React from 'react';
import {
  SideInformationContainer,
  SideInformationHeader,
  SideInformationFooter,
  SideInformationListItem
} from './side-information-card.styles';

interface SideInformationCardProps {
  title?: string;
  items: {
    title: string;
    description: string[];
    icon?: string;
  }[];
  footer?: {
    value: string;
    icon: string;
  };
}

export const SideInformationCard: React.FC<SideInformationCardProps> = ({
  footer,
  title,
  items
}) => {
  return (
    <SideInformationContainer>
      {!!title && (
        <SideInformationHeader>
          <h3>{title}</h3>
        </SideInformationHeader>
      )}
      <ul>
        {items.map(item => (
          <SideInformationListItem key={item.title}>
            {!!item?.icon && <i className={item.icon} />}
            <div>
              <h4>{item.title}</h4>
              <ul>
                {item.description.map(descriptionItem => (
                  <li key={descriptionItem}>{descriptionItem}</li>
                ))}
              </ul>
            </div>
          </SideInformationListItem>
        ))}
      </ul>
      {!!footer && (
        <SideInformationFooter>
          <i className={footer.icon} />
          <h3>{footer.value}</h3>
        </SideInformationFooter>
      )}
    </SideInformationContainer>
  );
};
