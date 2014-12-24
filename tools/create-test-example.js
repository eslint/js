/*!espree-section: spread-operator-attributes*/
<div {...props} />
/*!espree-section: spread-operator-attribute-and-regular-attribute*/
<div {...props} post="attribute" />
/*!espree-section: trailing-spread-operator-attribute*/
<div pre="leading" pre2="attribute" {...props}></div>
/*!espree-section: invalid-placeholder-in-closing-tag*/
<div>stuff</div {...props}>
/*!espree-section: invalid-matching-placeholder-in-closing-tag*/
<div {...props}>stuff</div {...props}>
