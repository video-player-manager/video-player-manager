"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AddEdit } from "@/components/player"
import { usePlayerService } from "@/services"

export default Edit

interface Params {
  params: {
    id: string
  }
}

function Edit({ params: { id } }: Params) {
  const router = useRouter()
  const playerService = usePlayerService()
  const player = playerService.player

  useEffect(() => {
    if (!id) return

    // fetch user for add/edit form
    playerService.getById(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return player ?
      <AddEdit
        title="Edit Player"
        player={player}
      />
    : <span>Spinner</span>
}
