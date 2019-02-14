# Design Systems with React and Typescript in Storybook

### In this course, we will learn how to set up all the necessary infrastructure to build a Design System of reusable React components, with state of the art developer experience afforded by Typescript and Storybook.

## setup:
Install yarn globally
```
brew install yarn
```
Make an empty folder and start the project
```
yarn init -y
```
Now add the dependencies

```
yarn add -D
```
Now lets add `@storybook/react` for the react version as well as `babel-core` for Babel

```
yarn add -D @storybook/react babel-core
```

We're also going to add `react` and `react-dom` as real dependencies.

```
yarn add react react-dom
```

Now, I'm using the mkdir command to set up two folders, `.storybook` -- which is the special folder for storybook -- and `src.`

```
mkdir .storybook src
touch .storybook/config.js
```
Finally, head too `package.json` and add an npm scripts.

```
"scripts": {
  "storybook": "start-storybook -p 6006 -c.storybook
}
```

When you run `npm run storybook`, it's going to start up a server on http://localhost:6006, which you can navigate to and see the result. That's your storybook.

Format: ![Alt Text](https://d2eip9sf3oo6c2.cloudfront.net/asciicasts/Design%20Systems%20with%20React%20and%20Typescript%20in%20Storybook/original_react-set-up-storybook-for-react-from-scratch/react-set-up-storybook-for-react-from-scratch-result.png)