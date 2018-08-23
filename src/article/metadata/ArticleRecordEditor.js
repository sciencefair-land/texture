import NodeModelComponent from '../shared/NodeModelComponent'

export default class ArticleRecordEditor extends NodeModelComponent {
  get isRemovable () {
    return false
  }

  _renderHeader () {
    // no header
  }

  _getPropertyEditorClass (property) {
    switch (property.name) {
      // don't provide an editor for 'authors' and 'editors'
      // these fields are managed in dedicated metadata sections
      case 'authors':
      case 'editors': {
        return null
      }
      default:
        return super._getPropertyEditorClass(property)
    }
  }
}
