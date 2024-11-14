
const animals = [
    {
      id: 1,
      name: '사자',
      description: '사자는 아프리카와 아시아에서 발견되는 대형 고양이과 동물로, 강력한 턱과 갈기로 유명합니다.',
      imageUrl: 'https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: '코끼리',
      description: '코끼리는 땅에서 가장 큰 포유류로, 긴 코와 거대한 귀가 특징입니다.',
      imageUrl: 'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: '북극곰',
      description: '북극곰은 북극 지역에 서식하는 대형 곰으로, 주로 물개를 먹고 살아갑니다.',
      imageUrl: 'https://images.pexels.com/photos/53425/polar-bear-arctic-wildlife-snow-53425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: '펭귄',
      description: '펭귄은 남극과 남극 근처에 서식하는 비행하지 않는 새로, 물에서 사냥에 능합니다.',
      imageUrl: 'https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: '캥거루',
      description: '캥거루는 호주에서만 서식하는 동물로, 긴 다리와 꼬리를 이용해 뛰어다닙니다.',
      imageUrl: 'https://images.pexels.com/photos/5840729/pexels-photo-5840729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      name: '기린',
      description: '기린은 지상에서 가장 키가 큰 동물로, 긴 목과 다리를 가지고 있으며 주로 나무의 높은 잎을 먹습니다.',
      imageUrl: 'https://images.pexels.com/photos/26893479/pexels-photo-26893479/free-photo-of-a-giraffe-zebras-and-antelopes-standing-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 7,
      name: '하마',
      description: '하마는 물가에 사는 대형 포유류로, 강력한 턱과 독특한 몸체 구조로 유명합니다.',
      imageUrl: 'https://images.pexels.com/photos/667201/pexels-photo-667201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 8,
      name: '치타',
      description: '치타는 지구상에서 가장 빠른 육상 동물로, 뛰어난 속도와 민첩성을 자랑합니다.',
      imageUrl: 'https://images.pexels.com/photos/1109898/pexels-photo-1109898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 9,
      name: '고릴라',
      description: '고릴라는 인간과 가장 가까운 유인원 중 하나로, 높은 지능과 사회적 행동을 보입니다.',
      imageUrl: 'https://images.pexels.com/photos/2657973/pexels-photo-2657973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 10,
      name: '여우',
      description: '여우는 주로 숲과 산림에 서식하며, 민첩하고 지능적인 동물로 알려져 있습니다.',
      imageUrl: 'https://images.pexels.com/photos/158340/fuchs-wild-animal-predator-animal-world-158340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 11,
      name: '판다',
      description: '판다는 중국의 대나무 숲에서 서식하며, 주로 대나무를 먹고 생활하는 온순한 성격의 동물입니다.',
      imageUrl: 'https://images.pexels.com/photos/1123765/pexels-photo-1123765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 12,
      name: '늑대',
      description: '늑대는 매우 사회적인 동물로, 무리를 지어 사냥하며 강력한 협동력을 보입니다.',
      imageUrl: 'https://images.pexels.com/photos/162256/wolf-predator-european-wolf-carnivores-162256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 13,
      name: '수달',
      description: '수달은 물과 육지 모두에서 생활하며, 뛰어난 수영 실력으로 유명한 작은 포유류입니다.',
      imageUrl: 'https://images.pexels.com/photos/28749522/pexels-photo-28749522/free-photo-of-playful-otter-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 14,
      name: '홍학',
      description: '홍학은 물가에 서식하며, 길고 얇은 다리와 특유의 핑크색 깃털로 유명합니다.',
      imageUrl: 'https://images.pexels.com/photos/584498/pexels-photo-584498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 15,
      name: '부엉이',
      description: '부엉이는 야행성 맹금류로, 뛰어난 시력과 청력을 통해 밤에 사냥을 합니다.',
      imageUrl: 'https://images.pexels.com/photos/2683946/pexels-photo-2683946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  export default animals;
  