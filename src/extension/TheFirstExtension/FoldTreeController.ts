import molecule from '@dtinsight/molecule'
import { IFolderTreeNodeProps } from '@dtinsight/molecule/esm/model'
import { transformToEditorTab } from '@/common'

import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model'
import { cloneDeep } from 'lodash'
import API from '../../api'
import { STATUS_BAR_LANGUAGE } from '@/extension/TheFirstExtension/base.tsx'

export async function initFolderTree() {
  // console.log('initFolderTree')
  const res = await API.getFolderTree()
  if (res.message === 'success') {
    const folderTreeData = cloneDeep(res.data)
    molecule.folderTree.add(folderTreeData)
  }
}

export function handleSelectFolderTree() {
  // console.log('handleSelectFolderTree')
  molecule.folderTree.onSelectFile((file: IFolderTreeNodeProps) => {
    // console.log('molecule.folderTree.onSelectFile')
    molecule.editor.open(transformToEditorTab(file))
    updateStatusBarLanguage(file.data.language)
  })
}

export function updateStatusBarLanguage(language: string) {
  console.log('updateStatusBarLanguage')
  if (!language) return
  language = language.toUpperCase()
  const languageStatusItem = molecule.statusBar.getStatusBarItem(STATUS_BAR_LANGUAGE.id, Float.right)
  if (languageStatusItem) {
    languageStatusItem.name = language
    molecule.statusBar.update(languageStatusItem, Float.right)
  } else {
    molecule.statusBar.add(Object.assign({}, STATUS_BAR_LANGUAGE, { name: language }), Float.right)
  }
}
export function handleStatusBarLanguage() {
  console.log('handleStatusBarLanguage')
  const moleculeEditor = molecule.editor
  moleculeEditor.onSelectTab((tabId, groupId) => {
    console.log(tabId, groupId)
    if (!groupId) return
    const group = moleculeEditor.getGroupById(groupId)
    if (!group) return
    const tab: any = moleculeEditor.getTabById(tabId, group.id!)
    if (tab) {
      updateStatusBarLanguage(tab.data!.language!)
    }
  })
}
