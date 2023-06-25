# "TypeScript React"

---

### Type React

1. ReactElement: Це тип, що представляє React-елемент. Він описує об'єкт, який
   включає тип компонента, властивості (props) та дочірні елементи.

2. ReactNode: Це тип, який описує будь-який вузол React, який може бути
   відображений. Це може бути React-елемент, рядок, число або будь-який інший
   вузол.

3. ReactComponent: Це тип, який описує клас або функціональний компонент React.
   Він використовується для визначення типу компонента і його властивостей
   (props).

4. React.FC: Це тип, який представляє функціональний компонент React. Він має
   загальний тип та автоматично визначає типи для властивостей (props)
   компонента.

5. React.ComponentType: Це тип, який описує класовий або функціональний
   компонент React. Він використовується для опису типу компонента без
   врахування конкретних властивостей (props).

---

### Example

Example.tsx

---

### Your First Vite React Project

1.  npm create vite@latest
2.  React -> TypeScript
3.  npm i

---

## Deploying Vite / React App to GitHub Pages

1. Install the gh-pages package

"npm install gh-pages --save-dev"

2. In the package.json file add these lines before "build": "vite build",

"predeploy": "npm run build", "deploy": "gh-pages -d dist",

3. In the vite.config.js file add this line before plugins: [react()],

base: "/YOUR_REPOSITORY_NAME",

4. In terminal type

npm run deploy

🎉 You now have a gh-pages branch in your repository and your app is deployed
(you can check it under Settings -> Pages )

---

### ⚙ Free Web Dev Tools

- 🔗 [Vite](https://vitejs.dev/)
- 🔗 [Google Chrome Web Browser](https://google.com/chrome/)
- 🔗 [Visual Studio Code (aka VS Code)](https://code.visualstudio.com/)
- 🔗
  [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### 📚 References

- 🔗 [Typescript Official Site](https://www.typescriptlang.org/)
- 🔗 [Node.js & npm](https://nodejs.org/)
- 🔗
  [Anders Hejlsberg, Creator of Typescript and C# Interview](https://dev.to/destrodevshow/typescript-and-c-both-created-by-the-same-person-named-anders-hejlsberg-42g4)
- 🔗
  [Stackoverflow Survey Results](https://survey.stackoverflow.co/2022/#technology-most-popular-technologies)
- - 🔗
    [TypeScript + React Cheatsheet](https://github.com/typescript-cheatsheets/react)
