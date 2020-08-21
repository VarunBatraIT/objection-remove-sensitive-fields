module.exports = (Model) => {
  return class extends Model {
    // Class should have public sensitiveFields which will be removed
    toJSON(opt){
      const json = super.toJSON(opt);
      if(Array.isArray(this.sensitiveFields)){
        for (const value of this.sensitiveFields) {
          if(typeof json[value] !== "undefined"){
            delete json[value]
          }
        }
        // removes itself from model json
        delete json['sensitiveFields']
      }
      return json
    }
  };
}
