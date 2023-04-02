import * as Sqrl from 'squirrelly'
import * as formats from './formats.json'

const fTemplates = {}

for( const entry of Object.entries(formats)) {
  const [lang, format] = entry;
  if(lang !== 'default') {

    for( const fEntry of Object.entries(format)) {
      const [templateName, formatTemplate] = fEntry;
      const fullTemplateName = `${lang}_${templateName}`
      //@ts-ignore
      fTemplates[fullTemplateName] = Sqrl.compile(formatTemplate, {useWith: true})
    }
  }
}

//@ts-ignore
export const format = (templateName, lang, data) => {
  const fullTemplateName = `${lang}_${templateName}`
  console.log(fullTemplateName)
  
  //@ts-ignore
  const templFun = fTemplates[fullTemplateName]
  console.log(templFun)
  if(!templFun) return '[UNDEFINED]'

  return templFun(data, Sqrl.defaultConfig)
}