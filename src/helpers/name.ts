export function removeInitialsFromName(fullName: string) {
  const partsName = fullName.trim().split(' ');

  if (partsName.length === 1) {
    return partsName[0].substring(1, 1).toUpperCase();
  }

  if (partsName.length >= 2) {
    const firstInitial = partsName[0].substring(0, 1).toUpperCase();
    const secondInicial = partsName[partsName.length - 1]
      .substring(0, 1)
      .toUpperCase();

    return firstInitial + secondInicial;
  }

  return fullName;
}
