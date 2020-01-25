const AvatarHairColor = (props) => {
  const hairColor = props.hairColor;
  switch (hairColor) {
    case 'blond':
      return 'yellow';
    default:
      return 'brown';
    }
  };

export default AvatarHairColor;
