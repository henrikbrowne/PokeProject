"use client"

import { Drawer, Portal, Button, CloseButton } from "@chakra-ui/react"
import { useState } from "react"
import customerServiceRep from "../../assets/customer_service_rep.jpg"
import Chatbot from "./ChatBot"
import "./Footer.css"

export default function CustomerService() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      {/* Image acts as the drawer trigger */}
      <Drawer.Trigger asChild>
        <img
          src={customerServiceRep}
          alt="Customer Service"
          className="footer-icon big-img"
          role="button"
          tabIndex={0}
          aria-label="Open customer service chat"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true)
          }}
        />
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Customer Service Chat</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <Chatbot />
            </Drawer.Body>

            <Drawer.Footer>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
