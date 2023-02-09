const AC_GAME_OBJECTS = [];

export class AcGameObject {
  constructor() {
    AC_GAME_OBJECTS.push(this);
  }

  start() {
    //只执行一次
  }

  update() {
    // 每一帧执行一次，除了第一帧之外
  }

  destroy() {
    for (let i in AC_GAME_OBJECTS) {
      const obj = AC_GAME_OBJECTS[i];
      if (obj == this) {
        AC_GAME_OBJECTS.splice(i);
        break;
      }
    }
  }
}

const step = () => {
  requestAnimationFrame(step);
};

requestAnimationFrame(step);
