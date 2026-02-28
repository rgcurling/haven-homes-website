import { Dispatch, SetStateAction } from 'react';

export function setFilterValue(value: string, setter: Dispatch<SetStateAction<string>>): void {
  setter(value);
}

export function setSearchValue(value: string, setter: Dispatch<SetStateAction<string>>): void {
  setter(value);
}

export function setViewModeValue(value: 'grid' | 'magazine', setter: Dispatch<SetStateAction<'grid' | 'magazine'>>): void {
  setter(value);
}
