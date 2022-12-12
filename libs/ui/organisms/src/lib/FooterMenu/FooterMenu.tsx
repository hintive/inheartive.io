/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import React, { useState } from 'react';
import HeartsCredits from '../../../../molecules/src/lib/HeartsCredits';
import { colors } from 'libs/ui/theme/src/colors';
import { Icon, IconType, Pressable } from '@inheartive/ui/atoms';
import { FooterMenuProps, IconNameType } from './FooterMenuTypes';
import { HStack } from 'native-base';

const FooterMenu: React.ComponentType<FooterMenuProps> = ({ testID, activeIcon }) => {
  const activeColor = colors.footer[800];
  const inActiveColor = colors.footer[50];
  const [currentActiveIcon, setCurrentActiveIcon] = useState(activeIcon);
  const setIconColor = (iconName: IconNameType) => (currentActiveIcon === iconName ? activeColor : inActiveColor);

  const onFooterMenuChange = function (iconName: IconNameType): void {
    setCurrentActiveIcon(iconName);
    setIconColor(iconName);
  };

  return (
    <HStack bg='white' safeAreaBottom justifyContent='space-between' px='4' alignItems='center' testID={testID}>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.homepage)}>
        <Icon name={IconType.homeOutline} size={50} color={setIconColor(IconNameType.homepage)} />
      </Pressable>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.search)}>
        <Icon name={IconType.search} size={50} color={setIconColor(IconNameType.search)} />
      </Pressable>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.heart)}>
        <HeartsCredits credit={99} size={60} />
      </Pressable>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.plus)}>
        <Icon name={IconType.plusCircle} size={50} color={setIconColor(IconNameType.plus)} />
      </Pressable>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.star)}>
        <Icon name={IconType.starOutline} size={50} color={setIconColor(IconNameType.star)} />
      </Pressable>
    </HStack>
  );
};

export { FooterMenu };