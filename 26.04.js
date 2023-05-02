const languageTree = require('./language-tree.json'); // Підключаємо дерево з файлу

function findLanguage(tree, languageName, path = []) {
  for (let i = 0; i < tree.length; i++) { // Проходимось по всіх елементах дерева
    const node = tree[i];
    const currentPath = [...path, node.name]; // Зберігаємо поточний шлях
    if (node.name.toLowerCase().includes(languageName.toLowerCase())) {
      return currentPath; // Якщо знайдено шукану мову - повертаємо шлях до неї
    } else if (node.children) {
      const result = findLanguage(node.children, languageName, currentPath);
      if (result) {
        return result; // Якщо шукана мова знайдена в дочірньому вузлі - повертаємо шлях до неї
      }
    }
  }
  return null; // Якщо шукана мова не знайдена - повертаємо null
}

// Приклад виклику функції
const languageName = 'JS';
const path = findLanguage(languageTree, languageName);
if (path) {
  console.log(`Мова '${languageName}' знайдена за шляхом: ${path.join(' -> ')}`);
} else {
  console.log(`Мова '${languageName}' не знайдена.`);
}