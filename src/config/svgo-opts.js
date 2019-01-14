module.exports = {
  plugins: [
    { removeDimensions: true },
    { cleanupAttrs: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeDesc: true },
    { removeTitle: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { convertColors: { shorthex: false } },
    { convertPathData: false },
    { removeXMLProcInst: true },
    { moveGroupAttrsToElems: true}
  ]
}
