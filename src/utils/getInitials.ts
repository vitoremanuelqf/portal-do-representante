export function getInitials(displayName: string) {
  const parts = displayName.trim().split(' ')
  const firstInitial = parts[0].charAt(0).toUpperCase()
  const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase()

  return firstInitial + lastInitial
}
