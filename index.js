module.exports = (Model) => {
  return class extends Model {
    // Class should have static sensitiveFields which will be removed
    toJSON(opt){
      const json = super.toJSON(opt);
      const sensitiveFields = this.constructor.sensitiveFields;
      if(Array.isArray(sensitiveFields)){
        for (const value of sensitiveFields) {
          if(typeof json[value] !== "undefined"){
            delete json[value]
          }
        }
      }
      return json
    }
  };
}
