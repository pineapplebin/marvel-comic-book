declare module Database {
  export interface Volume {
    id: string
    title: string
    titleEn: string
    volumeNo: number
    startTime: number // 201901
    coverUrl: string
  }

  export interface Issue {
    id: string
    no: string
    subtitle: string
    total: number
    folderUrl: string
  }
}
