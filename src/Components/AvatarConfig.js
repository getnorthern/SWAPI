export const AvatarHairColor = (props) => {
  const hairColor = props.hairColor;
  switch (hairColor) {
    case 'blond':
      return '#e4cc02';
    case 'brown':
      return '#371203';
    case 'brown, grey':
      return '#bbb';
    case 'black':
      return '#000';
    case 'auburn':
      return '#dc6606';
    case 'auburn, white':
      return '#cb864f';
    case 'auburn, grey':
      return '#9c7251';
    case 'grey':
      return '#aaa';
    case 'white':
      return '#fff';
    case 'none':
      return null;
    default:
      return null;
    }
  };

export const AvatarSkinColor = (props) => {
  const skinColor = props.skinColor;
  switch (skinColor) {
    case 'fair':
    case 'light':
    case 'pale':
      return 'pink';
    case 'gold':
      return 'gold';
    case 'white, blue':
      return 'linear-gradient(to bottom, #fff 31%,#009 32%,#009 67%,#009 67%,#009 67%,#fff 68%)';
    case 'white, red':
      return 'linear-gradient(to bottom, #fff 31%,#900 32%,#900 67%,#900 67%,#900 67%,#fff 68%)';
    case 'green':
    case 'mottled green':
      return '#090';
    case 'green-tan, brown':
    case 'grey, green, yellow':
    case 'tan':
      return 'khaki';
    case 'brown':
    case 'unknown':
      return '#371203';
    case 'brown mottle':
      return '#524500';
    case 'grey':
      return '#ccc';
    case 'metal':
      return 'silver';
    case 'orange':
      return 'orange';
    case 'dark':
      return '#aa8449';
    case 'grey, blue':
    case 'blue, grey':
      return 'linear-gradient(to bottom, #009 31%,#ccc 32%,#ccc 67%,#ccc 67%,#ccc 67%,#009 68%)';
    case 'green, grey':
      return 'linear-gradient(to bottom, #090 31%,#ccc 32%,#ccc 67%,#ccc 67%,#ccc 67%,#090 68%)';
    case 'silver, red':
    case 'grey, red':
      return 'linear-gradient(to bottom, #ccc 31%,#900 32%,#900 67%,#900 67%,#900 67%,#ccc 68%)';
    case 'red':
      return '#900';
    case 'blue':
      return '#009';
    case 'yellow':
      return 'yellow';
    case 'white':
    case 'none':
      return 'white';
    case 'brown, white':
      return 'linear-gradient(to bottom, brown 31%,#fff 32%,#fff 67%,#fff 67%,#fff 67%,brown 68%)';
    case 'red, blue, white':
      return 'linear-gradient(to bottom, #ffffff 31%,#382ce8 32%,#382ce8 67%,#382ce8 67%,#382ce8 67%,#ff0202 68%)';
    default:
      return null;
  }
};
