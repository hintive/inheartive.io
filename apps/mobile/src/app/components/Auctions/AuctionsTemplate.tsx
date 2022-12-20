/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { IAuction, ICategory, SortDirection, SortKey } from '@inheartive/data';
import { Text, View } from '@inheartive/ui/atoms';
import { AuctionsList, FilteringArea, FooterMenu, IconNameType, AppHeader } from '@inheartive/ui/organisms';
import { Link } from 'react-router-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

interface Props {
  categories: ICategory[];
  selectedCategoryID: string;
  onCategoryChange: (id: string) => void;
  sortBy: SortKey;
  onSortByChange: (sortBy: SortKey) => void;
  sortDir: SortDirection;
  onSortDirChange: (sortDir: SortDirection) => void;
  auctions: IAuction[];
  activeIcon: IconNameType;
}

export function AuctionsTemplate(props: Props) {
  const insets = useSafeAreaInsets();

  const {
    auctions,
    categories,
    selectedCategoryID,
    onCategoryChange,
    sortBy,
    onSortByChange,
    sortDir,
    onSortDirChange,
    activeIcon,
  } = props;

  return (
    <>
      <AppHeader />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View mt={10} px={8} paddingTop={insets.top} paddingBottom={insets.bottom}>
            <FilteringArea
              categories={categories}
              selectedCategoryID={selectedCategoryID}
              onCategoryChange={onCategoryChange}
              sortBy={sortBy}
              onSortByChange={onSortByChange}
              sortDir={sortDir}
              onSortDirChange={onSortDirChange}
            />
            <AuctionsList auctions={auctions} linkPatternWithId='/auctions/:id' />
            <View mb={5}>
              <Link to='/sign-in'>
                <Text>Sign in</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </View>
      <FooterMenu activeIcon={activeIcon} />
    </>
  );
}

export default AuctionsTemplate;
