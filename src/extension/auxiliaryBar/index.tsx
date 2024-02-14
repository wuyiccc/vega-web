import molecule from '@dtinsight/molecule'
import type { UniqueId } from '@dtinsight/molecule/esm/common/types'
import type { IExtension } from '@dtinsight/molecule/esm/model'

export default class AuxiliaryBarExtensions implements IExtension {
  id: UniqueId = 'auxiliaryBar'
  name = 'auxiliaryBar'
  activate(): void {
    molecule.auxiliaryBar.setMode('tabs')
    molecule.auxiliaryBar.addAuxiliaryBar([
      {
        key: ~~(Math.random() * 10) + new Date().getTime(),
        title: '任务属性'
      }
    ])
  }
  dispose(): void {
    throw new Error('Method not implemented.')
  }
}
