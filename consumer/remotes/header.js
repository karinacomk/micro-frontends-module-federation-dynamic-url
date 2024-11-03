module.exports = {
  name: "header",
  urlGlobalVariable: "headerModuleUrl",
  get url() {
    return `${process.env.REACT_APP_MF_HEADER}/remoteEntry.js?${this.randomString}`;
  },
  get federationConfig() {
    return `${this.name}@[window.${this.urlGlobalVariable}]`;
  },
  // exemplo se fosse para revalidar cache e manipular a url
  get randomString() {
    const date = new Date();

    const stringDate = String(
      new Date().setHours(date.getHours(), date.getMinutes(), 0, 0)
    );

    return `t=${stringDate}`; // gerando bypass qualquer a cada minuto
  },
};

// variavel global do js
// window.name = ""
